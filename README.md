A Next.js application that helps users practice job interviews using AI technology.

Key Features:
 AI-powered interview simulations
 User authentication with Firebase
 Real-time feedback and assessment
 Role-specific interview questions
 Tech stack-based interviews
 Progress tracking and analytics
 
Tech Stack:
Frontend: Next.js, TypeScript, TailwindCSS
Backend: Firebase (Authentication, Firestore)
AI Integration: OpenAI API
Deployment: Vercel
Logging: Winston logger

## Getting Started

First, run the development server:

```bash
npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Logging

The application uses Winston for logging with the following log files stored in the `./logs` directory:

### Log Files Structure
```
logs/
├── app.log    # General application logs including info-level messages
└── error.log  # Error-level messages and stack traces
```

### Log Levels
- **ERROR**: System errors and exceptions
- **INFO**: General operational information
- **DEBUG**: Detailed debugging information (development only)

### Environment Variables
```
LOG_LEVEL=info    # Set logging level (error|info|debug)
```

### Development
Logs are written to both files and console during development.

### Production
In production (Vercel):
- File logging is not available due to serverless architecture
- Use Vercel's built-in logging dashboard
- Consider integrating with external logging services for persistent logs

### Usage Example
```typescript
import logger from "@/lib/logger";

// Info level logging
logger.info("Interview session started", { userId: "123" });

// Error logging
logger.error("Database connection failed", { error: err });
```



## Deploy on Vercel

https://mock-interview-s34r.vercel.app/sign-in
