# Stage 1: Build the Angular application
FROM node:20-alpine as build

WORKDIR /app

# Enable pnpm
RUN corepack enable pnpm

# Copy package config and lock file
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy all source
COPY . .

# Replace placeholder with environment variable
ARG API_URL
RUN if [ -n "$API_URL" ]; then \
      sed -i "s|API_URL_PLACEHOLDER|$API_URL|g" src/environments/environment.prod.ts; \
    fi

# Build the project using pnpm
RUN pnpm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy custom nginx config if needed, or use default
# Copy build output from stage 1 to nginx public folder
COPY --from=build /app/dist/project-resource-roster/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
