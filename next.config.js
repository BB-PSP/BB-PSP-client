module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.138.85.147:8081/:path*',
      },
    ];
  },
};
