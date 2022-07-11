import JavaScriptLogo from '../../images/javascript.svg?component';
import HtmlLogo from '../../images/html.svg?component';
import CssLogo from '../../images/css.svg?component';
import ReactLogo from '../../images/react.svg?component';
import ReduxLogo from '../../images/redux.svg?component';

import TypescriptLogo from '../../images/typescript.svg?component';

import NodeLogo from '../../images/nodejs.svg?component';
import ExpressLogo from '../../images/express.svg?component';

import MysqlLogo from '../../images/mysql.svg?component';
import MongodbLogo from '../../images/mongodb.svg?component';

const Tools = () => {
  return(
    <section className="tools" id="tools">
      <article className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <h4>Front-End</h4>
            <div>
              <JavaScriptLogo />
              <HtmlLogo />
              <CssLogo />
              <ReactLogo />
              <ReduxLogo />
            </div>
          </div>
          <div className='flip-card-back'>
            <p>Trabalho com um Front-end feito em React.js e </p>
            <p>
              gerênciamento de estado feito com Redux ou ContextAPI.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Tools;
