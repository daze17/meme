import React, {Component} from "react"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { FormControl, Input } from '@material-ui/core'




class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "https://imgflip.com/s/meme/Doge.jpg",
            allMemeImgs: []
        }
      //  this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemeImgs: memes
            })
        })
    }
    handleChange=(event) =>{
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        console.log(randMemeImg)
        this.setState({ randomImg: randMemeImg })
    }
    render(){
        
        return(
            <div className="memeContainer">
            <Grid container spacing={2}>
                <Grid item xs={6}>

                    <FormControl className="meme-form" onSubmit={this.handleSubmit}>
                        <Input  type="text" name="topText" value={this.state.topText} placeholder="Top text" onChange={this.handleChange} />
                        <Input  type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom text" onChange={this.handleChange} />
                        <Button onClick={this.handleSubmit}>Next</Button>
                    </FormControl>
                </Grid>
                <Grid  item xs={6} className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default MemeGenerator