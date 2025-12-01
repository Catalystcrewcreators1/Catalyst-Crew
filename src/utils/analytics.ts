import ReactGA from 'react-ga4';

// Use Vite environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
const IS_PRODUCTION = import.meta.env.PROD;

type EventParams = {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      testMode: !IS_PRODUCTION, // Test mode in development
    });
    
    // Track initial pageview
    logPageView(window.location.pathname);
  } else if (!GA_MEASUREMENT_ID) {
    console.warn('GA_MEASUREMENT_ID is not set. Google Analytics will not track.');
  }
};

// Track page views
export const logPageView = (path: string) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: path,
      title: document.title,
      location: window.location.href
    });
  }
};

// Track custom events
export const logEvent = (params: EventParams) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    const { category, action, label, value, nonInteraction } = params;
    
    ReactGA.event(action, {
      category,
      label,
      value,
      nonInteraction,
    });
  }
};

// Track exceptions
export const logException = (description: string, fatal = false) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    ReactGA.gtag('event', 'exception', {
      description,
      fatal,
    });
  }
};

// Track social media interactions
export const logSocialInteraction = (network: string, action: string, target: string) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    ReactGA.gtag('event', 'social', {
      socialNetwork: network,
      socialAction: action,
      socialTarget: target,
    });
  }
};
