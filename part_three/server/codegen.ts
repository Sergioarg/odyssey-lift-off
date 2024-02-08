import { CodegenConfig, generate } from "npm:@graphql-codegen/cli";
import * as _typescript from "npm:@graphql-codegen/typescript";
import * as _typescript_resolvers from "npm:@graphql-codegen/typescript-resolvers";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context.ts#DataSourceContext",
        mappers: {
          Track: "../datasources/models.ts#TrackModel",
          Author: "../datasources/models.ts#AuthorModel",
          Module: "../datasources/models.ts#ModuleModel",
        },
      },
    },
  },
};

generate(config);
