import { useState } from "react";
import "./index.css"

const images = [
    {
      id: 1,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ekodt74sE9k22Kcb1D_9XwHaFj%26pid%3DApi&f=1&ipt=6cbbbbc2e9a4c8d9755e8fc0428da3201267baa55354def35d3c7ff2d72db354&ipo=images",
      alt: "Image 1"
    },
    {
      id: 2,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4tQxXmZ-k1Mfa7Va_SgCfgHaDw%26pid%3DApi&f=1&ipt=26cf5a691dc0f592e3203b993eaf37f57040918c134fd9cf45b6f3d3f97ef84b&ipo=images",
      alt: "Image 2"
    },
    {
      id: 3,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.G37tgeQqSNt7v2oPfj9ltQHaE7%26pid%3DApi&f=1&ipt=bf2947ebf43381e5dec6d8afc126dd5a180366895cb3e9ccb7fddadddb77d097&ipo=images",
      alt: "Image 3"
    },
    {
      id: 4,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.U_VJuupQohwnzXcKMztqWgHaEo%26pid%3DApi&f=1&ipt=169b12ff4df24ceb0e60cbf87e6494af31ca90ac631aae0d13fabe87d38371a5&ipo=images",
      alt: "Image 4"
    },
    {
      id: 5,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.b86tH3ITDNubc_6GBt5CgwHaEK%26pid%3DApi&f=1&ipt=58073ed788c86c35604feb6356d8d83f9c06d3c10f3f75c2b0ccffc2bc84087c&ipo=images",
      alt: "Image 5"
    },
    {
      id: 6,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.neUHCirum9horGt4aQUHdwHaEK%26pid%3DApi&f=1&ipt=ce229858710b7df08b887d675420bb8d52c2f78ca66cf678ff805049f8ecbc31&ipo=images",
      alt: "Image 6"
    },
    {
      id: 7,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.esdHnlB-eysViOsi0G_x9QHaEo%26pid%3DApi&f=1&ipt=7ae026a1cf64690696a15ad777aad547d9bb0f02028378eb418c1c51a3030b3a&ipo=images",
      alt: "Image 7"
    },
    {
      id: 8,
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EdxC05bm8NrCOuMBN7zqqAHaE6%26pid%3DApi&f=1&ipt=be4b705b3e6f103e93d8ef1843af6be0399ce02f7b14bae6a2bf631fed3a1238&ipo=images",
      alt: "Image 8"
    }
  ];
  
const App=()=>{
    const [image,setImage]=useState(images[0].imageUrl)
    const alt="images Related To Nature"
    const handleImage=(imageUrl)=>{
        setImage(imageUrl)
    }
    return(
        <div className="galary-app">
            <img className="image" src={image} alt={alt} />
            <h1 className="nature-heading">Nature Photography</h1>
            <h2 className="nature-heading">Nature Photography By <span>Sanni</span></h2>
            <div className="icons">
                {images.map(img=>(
                    <img key={img.id} onClick={()=>handleImage(img.imageUrl)} style={{opacity:image===img.imageUrl?1:0.2}} className="icon" src={img.imageUrl} alt={alt} />
                    
                ))}
            </div>
        </div>
    )
}

export default App