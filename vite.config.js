import istanbul from 'vite-plugin-istanbul';

export default {
  open: true,
  plugins: [
    istanbul({
      include: 'instrumented/*',
      exclude: ['node_modules', 'test/', '__tests__'],
      extension: [ '.js', '.ts' ],
      requireEnv: true,
    }),
  ],
};