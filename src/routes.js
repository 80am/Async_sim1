
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Nav from './Components/Nav'
import shelf from './Components/shelf'
import bin from './Components/bin'
import addtobin from './Components/addtobin';


export default(
    <Switch>
        <Route exact path= '/' component={Nav} />
        <Route exact path= '/shelf/:shelfId' component={shelf} />
        <Route exact path= '/shelf/:shelfId/bin/:binid' component={bin} />
        <Route exact path= '/shelf/:shelfid/bin/:binid/addtobin' component={addtobin} />
    </Switch>

)




{/* <Route path= '/shelfa' component={shelfa}  />
<Route path= '/shelfb' component={shelfb}  />
<Route path= '/shelf/c' component={shelfd}  /> */}
{/* <Route path= '/shelf/:id' component={shelfc}  /> */}