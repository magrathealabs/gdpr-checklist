import React from 'react'
import { Persist } from "react-persist"
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter'
import { steps, roles } from '../data.js'
import meta from '../shared/meta.js'
import Arrow from '../images/arrow-bottom.svg'
import Footer from '../components/Footer'
import Disclaimer from '../components/Disclaimer'
import Scrollspy from 'react-scrollspy'

class Li extends React.Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isExpanded: false,
    }
  }

  handleExpand = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !prevState.isExpanded
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isChecked: !prevState.isChecked
    }))
  }

  render () {
    return (
      <li className={`seed ${this.state.isExpanded ? 'expand' : ''}`}>
        <div className="header">
          <div className={`check ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="evenodd" strokeWidth="3" transform="translate(2 2)">
                <path stroke="#057ee6" d="M6 11.402l2.874 2.934L16.06 7"></path>
                <circle cx="11" cy="11" r="11"></circle>
              </g>
            </svg>
          </div>
          <div className={`expand-bar ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleExpand}>
            <p>{this.props.title}</p>
            <ul className='roles'>
              {this.props.role.map(function(role, index){
                return <li className={`${role}`} key={ index }>{roles[role]}</li>;
              })}
            </ul>


          </div>
          <div className="btn">
            <img src={Arrow} alt="" className="arrow" onClick={this.handleExpand} />
          </div>
        </div>
        <div className='body' style={{ display: this.state.isExpanded ? 'block' : 'none' }} >
          <p>{this.props.description}<br/><br/>Read more:</p>
          <ul>
            {this.props.links.map((l, index) => <li key={index}><a href={l.href} target="_blank">{l.title}</a></li>)}
          </ul>
        </div>
        <Persist
          name={this.props.section + ":item-" + this.props.id}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </li>
    )
  }
}

class Section extends React.Component {

  render () {
    return (

        <div>
        {

        this.props.list.map(function(item, index){

            var filtered_list = [];
            item.items.map( function(l, index)
                          {
                            if( ( this.props.controllerSelected  && l.role.includes('controller')  ) ||
                                    ( this.props.processorSelected  && l.role.includes('processor')  )  )

                            {
                                filtered_list.push( l );
                            }

                          }.bind(this)
              )

             if( filtered_list.length == 0)
             {
                return ;
             }
             return   <div className="scrollspy" id={[item.id]} key={index}>
                    <h3>{item.title}</h3>
                    <ul className="checklist">
                      { filtered_list.map( function(l, index)
                          {
                            if( ( this.props.controllerSelected  && l.role.includes('controller')  ) ||
                                    ( this.props.processorSelected  && l.role.includes('processor')  )  )

                            {
                                return <Li {...l} key={index} top={index * 70} section={item.id} />
                            }

                          }.bind(this)
                      )}
                    </ul>
                  </div>

          }.bind(this) )}

        </div>
    )
  }

}

class IndexPage extends React.Component {

  constructor() {
    super()
    this.state = {
      processorSelected: true,
      controllerSelected: true
    }
  }
  toggleController = () => {
     this.setState({ controllerSelected : !this.state.controllerSelected } );
  }

  toggleProcessor = () => {
     this.setState({ processorSelected : !this.state.processorSelected } );
  }

  render () {
    return (
      <div>
        <div className='wrapper'>
          <div className='columns'>
            <Sidebar />
            <div className="col-9">
              <h1>Checklist de conformidade com a LGPD</h1>
              <h2 className="description first">Entrar em conformidade com a LGPD não precisa ser complicado.
              Essa é uma checklist básica que você pode utilizar para aumentar sua conformidade com a lei.</h2>

              <p className="small description">Se a sua organização está determinando o próposito de armazemaneto e processamento de informação pessoal, ela é considerada uma <b>controladora</b>. Se a sua organização armazena ou processa dados pessoais em nome de outra organização, ela é considerada uma <b>processadora</b>. É possível que sua organização tenha os dois papéis. Utilize o filtro abaixo para visualizar somente os itens relevantes a sua organização.</p>

              <p className="small description">
              Essa lista está longe de ser um documento legal, ela é meramente uma tentativa de facilitar sua vida.

              <br/><br/>Sinta-se livre para <a href="https://github.com/magrathelabs/lgpd-checklist" target="_blank">contribuir diretamente</a> no GitHub!
              </p>

              <div className="filter-bar">
                <h3>Selecione o papel da sua organização:</h3>
                <ul className="selected-three">
                  <li onClick={this.toggleController} className={this.state.controllerSelected ? 'controller' : ''}><h2>Controladora: Eu determino porque os dados são processados</h2></li>
                  <li onClick={this.toggleProcessor} className={this.state.processorSelected ? 'processor' : ''}><h2>Processadora: Eu armazeno ou processo dados para terceiros</h2></li>
                </ul>
              </div>
                { steps.map( (function(s)
                    {
                    return <Section key={s.id} list={[s]} controllerSelected={this.state.controllerSelected} processorSelected={this.state.processorSelected} />
                    }).bind(this)
                    ) }
              <Footer />
              <Disclaimer />
            </div>
          </div>
        </div>
        <Persist
          name={"index-page"}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </div>
  )}
}

export default IndexPage
