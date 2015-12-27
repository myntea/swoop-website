FROM nginx
MAINTAINER Ruel <ragaballe@gmail.com>

RUN apt-get update

# Install program to configure locales
RUN apt-get install -y locales
RUN dpkg-reconfigure locales && \
  locale-gen C.UTF-8 && \
  /usr/sbin/update-locale LANG=C.UTF-8

RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && \
  locale-gen

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

# Jekyll Dependencies
RUN apt-get install -y make
RUN apt-get install -y g++
RUN apt-get install ruby-full -y
RUN apt-get install nodejs -y
RUN apt-get install zlib1g-dev -y
RUN apt-get install -y python2.7
RUN ln -s /usr/bin/python2.7 /usr/bin/python2

# For cloning
RUN apt-get install -y git

# Jekyll
RUN gem install jekyll

# Bundler
RUN gem install bundler

# clone the site itself
RUN git clone -b gh-pages https://github.com/longhairedmedia/swoop-website.git swoop
WORKDIR swoop
RUN bundle install

# build and move files to html
RUN bundle exec jekyll build --config _config_docker.yml -d /usr/share/nginx/html