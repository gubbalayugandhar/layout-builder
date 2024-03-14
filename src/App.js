import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    ShowContent: true,
    ShowLeftNavbar: true,
    ShowRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setstate(pre => ({ShowContent: !pre.ShowContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setstate(pre => ({ShowLeftNavbar: !pre.ShowLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setstate(pre => ({ShowRightNavbar: !pre.ShowRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
