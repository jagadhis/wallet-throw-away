import withPWA from 'next-pwa';

export default withPWA({
    dest: 'public',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
});