// Vercel Web Analytics
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
// The mode will automatically detect the environment:
// - 'production' when deployed to Vercel
// - 'development' for local development (logs to console)
inject({ mode: 'auto' });
