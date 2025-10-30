import ViajesPlaneados from "./ViajesPlaneados";
import ViajesRealizados from "./ViajesRealizados";
import Deseados from "./Deseados";
import Favoritos from "./Favoritos";

const components = {
  "planeados-tab": <ViajesPlaneados />,
  "realizados-tab": <ViajesRealizados />,
  "deseados-tab": <Deseados />,
  "favoritos-tab": <Favoritos />,
};

const TabContent = ({ selectedTab }) => {
  return components[selectedTab] || <ViajesPlaneados />;
};

export default TabContent;
