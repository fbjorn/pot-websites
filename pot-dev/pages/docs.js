import styled from 'styled-components';

const StyledDocs = styled.div`
  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main right right'
      'menu footer footer footer footer footer';
    grid-gap: 0px;
    padding: 1rem;
  }
  .header { grid-area: header; }
  .header a { color: red;}
  .menu { grid-area: menu; }
  .main { grid-area: main; }
  .right { grid-area: right; background: #666; color: white; }
  .footer { grid-area: footer; }
  .grid-container > div {
    // text-align: center;
    padding: 1rem;
    border: 1px solid;
  }
  a { text-decoration: underline; }
`;

class Docs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: null
    };
  }
  render() {
    const {
      selectedLanguage
    } = this.state;

    return (
      <StyledDocs>
        <div className="grid-container">
          <div className="header">
            <h1>Header</h1>
            <p>Check out 3-col libraries <a href="https://tech.trustpilot.com/an-evaluation-of-auto-generated-rest-api-documentation-uis-53031753a789">An evaluation of auto-generated REST API Documentation UIs</a> </p>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            <p>Sticky Accordian nested menu which follow scroll state.</p>
          </div>
          <div className="main">
            <h2>Main</h2>
            <p>Lazy-loaded or paginated documentation.</p>
            <p>Ipsum Blaster starship malcom nanogenes, ice gun gorram ferengi the ‘verse frack droid transporter protocol droid. Jayne youngling maul, alderaan shields leia psychic paper endor coruscant dagobah light saber palpatine. Wyrwulf carbonite wedge time lord apollo, jedi mind trick boba fett youngling alderaan disruptor data validium. AT-AT taanab hypercube bantha, dantooine shields morpho doctor who millenium falcon uhura. Cardassian crazy ivan spock bajoran. Validium malcom worf geordi la forge biodamper starfleet. Dalek felgercarb ferengi sullust jawa wedge gorram.</p>
            <p>Anakin boba fett mace windu ewok gorram yavin vader the ‘verse han solo endor tardis skywalker. Palpatine tylium ore bat’leth, naboo ba’ku doctor who troi picard R2-D2. Doctor who saffron boba fett frack alderaan everlasting matches reavers jayne inara disruptor obi-wan blaster bantha sulu communicator. Wookie a new hope dagobah, inara R2-D2 jedi warpstar vulcan worf carbonite light saber naboo ice gun doctor who return of the jedi. Warpstar dantooine firefly, geordi la forge speeder felgercarb tribble dooku C-3PO xindi coruscant.</p>
            <p>Greedo doctor who jedi mind trick the empire strikes back jango fett jethrik. Jethrik boba fett anakin validium felgercarb nanogenes the ‘verse. Frak blaster dalek dagobah C-3PO bazoolium corellia. Palpatine galmonging hoth wyrwulf, wookie greedo tardis mace windu grand moff tarkin carbonite. Tardis endor jelly babies yavin nanogenes. Mace windu saffron frak the ‘verse boba fett.</p>
          </div>  
          <div className="right">
            <h2>Right</h2>
            <p>Code examples in tabbed languages, language selection stored in state</p>
            <pre><code>
{`$(document).ready(function() 
    {
      $("#baconButton").click(function()
      {
        $.getJSON('https://baconipsum.com/api/?callback=?', 
          { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' }, 
          function(baconGoodness)
        {
          if (baconGoodness && baconGoodness.length > 0)
          {
            $("#baconIpsumOutput").html('');
            for (var i = 0; i < baconGoodness.length; i++)
              $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
            $("#baconIpsumOutput").show();
          }
        });
      });
    });`}
              </code></pre>
          </div>
          <div className="footer">Footer</div>
        </div>
      </StyledDocs>
    )
  }
}

export default Docs