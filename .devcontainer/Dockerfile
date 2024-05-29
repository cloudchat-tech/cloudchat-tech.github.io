FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

RUN npm install -g hexo-cli

# Setup Aliases
RUN echo "alias serve=\"npm run server\"" >> /etc/bash.bashrc && \
    echo "alias build=\"npm run build\"" >> /etc/bash.bashrc && \
    echo "alias clean=\"npm run clean\"" >> /etc/bash.bashrc && \
    echo "alias episode=\"hexo new episode \$1\"" >> /etc/bash.bashrc