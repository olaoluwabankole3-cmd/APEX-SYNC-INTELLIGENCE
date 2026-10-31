import { useLocationPath, WebsiteShell } from './qorvex3/layout';
import { HomePage } from './qorvex3/home';
import { CompanyPage, ApproachPage, InnovationPage } from './qorvex3/corporate';
import { CortexPage } from './qorvex3/cortex';
import { NotesPage, ArticlePage, CareersPage, ContactPage, NotFoundPage } from './qorvex3/editorial';
import { notes } from './qorvex3/content';
import './qorvex3/base.css';
import './qorvex3/pages.css';
import './qorvex3/details.css';
import './qorvex3/home-reference.css';
import './qorvex3/first-fold.css';

function RouteContent({path}:{path:string}) {
  switch(path){
    case '/': return <HomePage/>;
    case '/company': return <CompanyPage/>;
    case '/approach': return <ApproachPage/>;
    case '/cortex': return <CortexPage/>;
    case '/innovation': return <InnovationPage/>;
    case '/notes': return <NotesPage/>;
    case '/careers': return <CareersPage/>;
    case '/contact': return <ContactPage/>;
    default: {
      const match=path.match(/^\/notes\/([a-z0-9-]+)$/);
      if(match){ const note=notes.find(n=>n.slug===match[1]);if(note)return <ArticlePage note={note}/>; }
      return <NotFoundPage/>;
    }
  }
}
export default function App(){
  const {path,navigate}=useLocationPath();
  return <WebsiteShell path={path} navigate={navigate}><RouteContent path={path}/></WebsiteShell>;
}
