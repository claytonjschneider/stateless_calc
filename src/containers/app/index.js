import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../1_welcome'
import Form from '../2_form'
import Results from '../3_results'

import PageBanner from '../../globals/components/page_banner'
import HeaderImg from '../../globals/img/header_img.jpg'

const App = () => (
  <div>
    <PageBanner img={HeaderImg} bannerText="Akros TCO Calculator" />

    <main>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/results" component={Results} />
    </main>
  </div>
)

export default App
