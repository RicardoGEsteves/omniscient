import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/code(.*)',
  '/conversation(.*)',
  '/dashboard(.*)',
  '/image(.*)',
  '/music(.*)',
  '/settings(.*)',
  '/api/code(.*)',
  '/api/conversation(.*)',
  '/api/image(.*)',
  '/api/music(.*)',
  '/api/stripe(.*)',
  '/api/video(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
