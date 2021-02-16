import { buildSchema, useSideEntityController } from "@camberi/firecms";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const homePageSchema = buildSchema({
  name: "Home page",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
  },
});

const aboutPageSchema = buildSchema({
  name: "About page",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
  },
});

export default function PagesViewForController() {
  const sideEntityController = useSideEntityController();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="400px"
        mt={4}
        mx="auto"
      >
        <Box mb={2}>[FIXED] Fixed as of v0.25.2. Below is irrelevant</Box>
        <Box mb={2}>Closing opened entities throws an error</Box>
        <Box mb={2}>
          When clicked, the URL changes to <b>/c/pages</b>. Only when the
          navigation prop for {"<CMSApp />"} has an item with relativePath set
          to {'"/pages"'}, it works without errors.
        </Box>
        <Button
          onClick={() =>
            sideEntityController.open({
              entityId: "home",
              collectionPath: "/pages",
              editEnabled: false,
              schema: homePageSchema,
            })
          }
          color="primary"
          variant="contained"
          size="large"
        >
          Open doc /pages/home
        </Button>

        <Button
          onClick={() =>
            sideEntityController.open({
              entityId: "about",
              collectionPath: "/pages",
              editEnabled: false,
              schema: aboutPageSchema,
            })
          }
          color="primary"
          variant="contained"
          size="large"
        >
          Open doc /pages/about
        </Button>
      </Box>
    </Container>
  );
}
