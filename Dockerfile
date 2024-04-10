# Use the official Node.js 20 base image
FROM node:20

# Install Azure Functions Core Tools
RUN npm install -g azure-functions-core-tools@4 --unsafe-perm true

# Copy the current folder's content into the Docker image
COPY . .

# Expose the Azure Functions port
EXPOSE 7071

# Start Azure Functions
CMD ["func", "start", "--cors", "*"]