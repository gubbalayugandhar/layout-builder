// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {ShowContent, ShowLeftNavbar, ShowRightNavbar} = value

      return (
        <div className="body-container">
          {ShowLeftNavbar ? null : (
            <div className="leftcontainer">
              <h1 className="body-header">Left Navber Menu</h1>
              <ul className="list-item">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          )}
          {ShowContent ? null : (
            <div className="content">
              <h1 className="body-header">Context</h1>
              <p className="content-text">
                Loren ipsum dolor sit amet,consectetur adiiscing elit
              </p>
            </div>
          )}

          {ShowRightNavbar ? null : (
            <div className="right-navbar">
              <h1 className="body-header">Right Navber</h1>
              <div className="ad-boxs">
                <p className="ad">Ad 1</p>
                <p className="ad">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
