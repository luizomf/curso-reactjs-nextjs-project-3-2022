import { Base } from '../Base';
import { mockBase } from '../Base/mock';

function Home() {
  return <Base {...mockBase} />;
}

export { Home };
