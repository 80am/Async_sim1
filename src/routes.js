
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Nav from './Components/Nav'
import shelf from './Components/shelf'
import bin from './Components/bin'


export default(
    <Switch>
        <Route exact path= '/' component={Nav} />
        <Route path= '/shelf/:id' component={bin} />
         
    </Switch>

)




{/* <Route path= '/shelfa' component={shelfa}  />
<Route path= '/shelfb' component={shelfb}  />
<Route path= '/shelf/c' component={shelfd}  /> */}
{/* <Route path= '/shelf/:id' component={shelfc}  /> */}