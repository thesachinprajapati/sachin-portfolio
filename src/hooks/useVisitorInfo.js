import { useState, useEffect } from 'react';

const useVisitorInfo = () => {
  const [visitorInfo, setVisitorInfo] = useState({
    ip: 'Loading...',
    visitorCount: 0,
    loading: true
  });

  useEffect(() => {
    const fetchVisitorInfo = async () => {
      try {
        // Fetch IP address from a free API
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        
        // Get or initialize visitor count from localStorage
        const storedCount = localStorage.getItem('visitorCount');
        let currentCount = storedCount ? parseInt(storedCount) : 0;
        
        // Check if this is a new session
        const lastVisit = localStorage.getItem('lastVisit');
        const now = new Date().getTime();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        
        if (!lastVisit || (now - parseInt(lastVisit)) > oneHour) {
          currentCount += 1;
          localStorage.setItem('visitorCount', currentCount.toString());
          localStorage.setItem('lastVisit', now.toString());
        }
        
        setVisitorInfo({
          ip: ipData.ip,
          visitorCount: currentCount,
          loading: false
        });
      } catch (error) {
        console.error('Error fetching visitor info:', error);
        // Fallback to local data only
        const storedCount = localStorage.getItem('visitorCount');
        const currentCount = storedCount ? parseInt(storedCount) : 1;
        
        setVisitorInfo({
          ip: 'Unable to fetch',
          visitorCount: currentCount,
          loading: false
        });
      }
    };

    fetchVisitorInfo();
  }, []);

  return visitorInfo;
};

export default useVisitorInfo;