module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df6f0abf9855045167591799f32adca6'),
  },
});
