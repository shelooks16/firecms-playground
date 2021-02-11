import {
  AdditionalView,
  buildSchema,
  CMSApp,
  EntityCollection,
} from "@camberi/firecms";
import PagesViewForController from "./PagesViewForController";
import PagesViewCollectionTable from "./PagesViewCollectionTable";
import RoomsViewForController from "./RoomsViewForController";
import RoomsViewCollectionTable from "./RoomsViewCollectionTable";
import { firebaseConfig } from "./firebase-cfg";

const roomsSchema = buildSchema({
  name: "Room",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
  },
});

const navigation: EntityCollection[] = [
  {
    schema: roomsSchema,
    name: "Rooms",
    relativePath: "rooms",
  },
];

const additionalViews: AdditionalView[] = [
  {
    path: "pv1",
    name: "pages controller",
    group: "Page views",
    view: <PagesViewForController />,
  },
  {
    path: "pv2",
    name: "pages collection table",
    group: "Page views",
    view: <PagesViewCollectionTable />,
  },
  {
    path: "rv1",
    name: "rooms controller",
    group: "Room views",
    view: <RoomsViewForController />,
  },
  {
    path: "rv2",
    name: "rooms collection table",
    group: "Room views",
    view: <RoomsViewCollectionTable />,
  },
];

function App() {
  return (
    <CMSApp
      name="Rocket jump"
      logo="https://i0.wp.com/www.blakefren.ch/wp-content/uploads/2019/01/rocket-logo-transparent-red.png?fit=1564%2C1564"
      signInOptions={[]}
      authentication={() => true}
      allowSkipLogin
      navigation={navigation}
      firebaseConfig={firebaseConfig}
      additionalViews={additionalViews}
    />
  );
}

export default App;
