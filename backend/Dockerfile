# Use Node image
FROM node:18-alpine

# Install json-server globally
RUN npm install -g json-server

# Set working directory
WORKDIR /data

# Copy db.json
COPY db.json .

# Expose the default json-server port
EXPOSE 3000

# Start json-server with CORS enabled
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--cors"]
