FROM oraclelinux:7-slim
RUN yum install -y python3 make g++
RUN yum update -y && \
  yum install -y oracle-release-el7 && \
  yum-config-manager --disable ol7_developer_nodejs\* && \
  yum-config-manager --enable ol7_developer_nodejs14 && \
  yum install -y oracle-nodejs-release-el7 && \
  yum install -y oracle-instantclient19.3-basic.x86_64 && \
  curl -sL https://rpm.nodesource.com/setup_14.x | bash - && \
  yum install -y gcc-c++ && \
  yum install -y procps && \
  yum install -y java-11-openjdk-devel

RUN  yum install -y nodejs && \
      yum update -y && \
      yum clean all && \
      node --version && \
      npm install oracledb && \
      npm --version && \
      echo Installed

RUN java -version
RUN echo $JAVA_HOME
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm","run", "start:prod"]
