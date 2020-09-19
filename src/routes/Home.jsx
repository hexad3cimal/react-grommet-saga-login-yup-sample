import React from 'react';
import { Box } from 'grommet';
import { NavBar, LoginComponent } from '../components/Home';

export const Home = () => (
  <section>
    <NavBar />
    <Box align="center" pad="large">
      <LoginComponent />
    </Box>
    {/* <Section>*/}
    {/*  <Footer />*/}
    {/* </Section>*/}
  </section>
);

export default Home;
