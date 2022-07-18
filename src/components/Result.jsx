import "./Result.css"
const Result = ({wikiData}) => {

console.log(wikiData)
    return (

        <>
        
        <div className="result-section">
            <div>
              <h3 className="result-header">{wikiData.title}</h3>  
            </div>
<div className="result-content" >
<p dangerouslySetInnerHTML={{__html: `${wikiData.snippet}...`}}></p>
</div>
<div>
    <a  href={`https://en.wikipedia.org/wiki/${wikiData.title}`} className ="button" target="_blank">Continue reading</a>
</div>
        </div>
        
        </>
    )
}
export default Result;