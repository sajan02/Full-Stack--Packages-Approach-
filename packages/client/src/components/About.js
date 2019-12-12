import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class About extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron" style={{opacity:'0.8'}}>
                <h1 class="display-4 text-center" style={{color:'rgb(95, 18, 20)'}}>Coding Challenge</h1>
                <p class="lead">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <hr class="my-4"/>
                <p><span style={{fontSize:'16px', color:'#5f1214',fontWeight:900}}>Sajan Kashi</span> I am the creator of this app and I am still writing about myself...!</p>
                <p><span style={{fontSize:'16px', color:'#5f1214',fontWeight:900}}>Version:</span> 1.0</p>
                <p><span style={{fontSize:'16px', color:'#5f1214',fontWeight:900}}>Team:</span>NineLeaps</p>                
                {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
            </div>
        );
    }
}

export default About;

         