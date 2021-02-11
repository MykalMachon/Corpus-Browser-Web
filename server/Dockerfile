FROM ubuntu:18.04
ENV TZ=America/Vancouver
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update
RUN apt-get install -y python3 unixodbc-dev unixodbc libxml2-dev libxmlsec1-dev libxmlsec1-openssl python3-dev python3-pip nginx gnupg2 curl libaio1 wget unzip
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17
WORKDIR /opt/oracle
RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && rm -f instantclient-basiclite-linuxx64.zip && \
    cd /opt/oracle/instantclient* && rm -f *jdbc* *occi* *mysql* *README *jar uidrvci genezi adrci && \
    echo /opt/oracle/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && ldconfig
VOLUME /deploy
WORKDIR /deploy
COPY requirements.txt .
RUN pip3 install setuptools
RUN pip3 install -r requirements.txt
EXPOSE 8080
CMD ["/usr/local/bin/gunicorn", "-b", ":8080", "app:app", "--log-level=info", "--workers=5", "-t 30", "--worker-class=gevent"]