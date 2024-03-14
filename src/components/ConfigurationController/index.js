// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        ShowContent,
        ShowLeftNavbar,
        ShowRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="controller-container">
          <div>
            <h1>Layout</h1>
            <div>
              <div>
                <input
                  checked={ShowContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <input
                  checked={ShowLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="LeftNavbar"
                />
                <label htmlFor="LeftNavbar">Left Navbar</label>
              </div>
              <div>
                <input
                  checked={ShowRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="RightNavbar"
                />
                <label htmlFor="RightNavbar">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
