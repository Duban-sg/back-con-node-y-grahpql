import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge"

const files = loadFilesSync(path.join(__dirname),{ extensions: ['graphql']})

const typeDefs = mergeTypeDefs(files);



export default  typeDefs;