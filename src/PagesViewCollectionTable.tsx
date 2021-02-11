import {
  buildSchema,
  EntityCollection,
  EntityCollectionTable,
} from "@camberi/firecms";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const pageSchema = buildSchema({
  name: "Page",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
  },
});

const pagesCollectionEntity: EntityCollection = {
  name: "Pages",
  schema: pageSchema,
  relativePath: "/",
};

function BorderBox({ children }: any) {
  return (
    <Box my={3} p={3} border="1px solid #000">
      {children}
    </Box>
  );
}

const PagesViewCollectionTable = () => {
  return (
    <Container>
      <BorderBox>
        <Box mb={2}>
          Below is the result of rendering {"<EntityCollectionTable />"}. The
          container for actual table has implicit CSS {"height: 100%"} which
          requires a parent with fixed height. I think this should be mentioned.
        </Box>

        <Box mb={2}>
          When clicking on ADD PAGE or Edit button, it throws an error. This is
          because pages collection is not included in the main navigation passed
          to {"<CMSApp />"}. When ADD PAGE or Edit is clicked, the URL changes
          to <b>/c/pages</b>. That route was not created from the collection.
          Only when the navigation prop for {"<CMSApp />"} has a collection
          entity with relativePath set to {'"/pages"'}, it works. And the
          collection entity schema must match schema passed to{" "}
          {"<EntityCollectionTable />"} render here, as otherwise it will lead
          to schema mismatch.
        </Box>

        <Box fontSize="20px" color="blue">
          With fixed wrapper 300px:
        </Box>
        <Box height="300px">
          <EntityCollectionTable
            collectionConfig={pagesCollectionEntity}
            collectionPath="pages"
          />
        </Box>

        <Box fontSize="20px" color="red" mt={2}>
          Same as above but without any wrapper:
        </Box>
        <EntityCollectionTable
          collectionConfig={pagesCollectionEntity}
          collectionPath="pages"
        />
      </BorderBox>
    </Container>
  );
};

export default PagesViewCollectionTable;
