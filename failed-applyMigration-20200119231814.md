# Failed applyMigration at 2020-01-20T05:18:14.806Z
## RPC One-Liner
```json
{"id":4,"jsonrpc":"2.0","method":"applyMigration","params":{"projectInfo":"","force":true,"migrationId":"watch-20200119231812","steps":[{"tag":"CreateModel","model":"Key"},{"tag":"CreateField","model":"Key","field":"id","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Key","field":"id"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Key","field":"id"},"directive":"default"},"argument":"","value":"cuid()"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Key","field":"id"},"directive":"id"}},{"tag":"CreateField","model":"Key","field":"value","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Key","field":"value"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Key","field":"value"},"directive":"default"},"argument":"","value":"uuid()"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Key","field":"value"},"directive":"unique"}},{"tag":"CreateField","model":"Key","field":"createdAt","type":"DateTime","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Key","field":"createdAt"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Key","field":"createdAt"},"directive":"default"},"argument":"","value":"now()"},{"tag":"CreateField","model":"Key","field":"environment","type":"Environment","arity":"Optional"},{"tag":"CreateField","model":"Organization","field":"clientId","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Organization","field":"clientId"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Organization","field":"clientId"},"directive":"default"},"argument":"","value":"uuid()"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Organization","field":"clientId"},"directive":"unique"}},{"tag":"CreateField","model":"Organization","field":"keys","type":"Key","arity":"List"}],"sourceConfig":"generator photon {\n    provider = \"photonjs\"\n}\n\ndatasource db {\n    provider = \"postgresql\"\n    url      = \"postgresql://postgres:mypassword@localhost/lightswitch?sslmode=prefer\"\n}\n\nmodel Organization {\n    id       String  @default(cuid()) @id\n    clientId String  @default(uuid()) @unique\n    name     String?\n\n    keys Key[]\n}\n\nmodel Environment {\n    id           String       @default(cuid()) @id\n    organization Organization\n    name         String\n}\n\nmodel Key {\n    id          String       @default(cuid()) @id\n    value       String       @default(uuid()) @unique\n    createdAt   DateTime     @default(now())\n    environment Environment?\n}\n\nmodel Variant {\n    id    String @default(cuid()) @id\n    value String\n}\n\nmodel Switch {\n    id             String        @default(cuid()) @id\n    name           String\n    key            String\n    type           SwitchType\n    environments   Environment[]\n    enabled        Boolean       @default(false)\n    defaultVariant Variant?      @relation(name: \"defaultVariant\")\n    variants       Variant[]     @relation(name: \"variants\")\n    organization   Organization\n    createdAt      DateTime      @default(now())\n    updatedAt      DateTime      @updatedAt\n\n}\n\nenum SwitchType {\n    Boolean\n    Multi\n}"}}
```

## RPC Input Readable
```json
{
  "id": 4,
  "jsonrpc": "2.0",
  "method": "applyMigration",
  "params": {
    "projectInfo": "",
    "force": true,
    "migrationId": "watch-20200119231812",
    "steps": [
      {
        "tag": "CreateModel",
        "model": "Key"
      },
      {
        "tag": "CreateField",
        "model": "Key",
        "field": "id",
        "type": "String",
        "arity": "Required"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "id"
          },
          "directive": "default"
        }
      },
      {
        "tag": "CreateArgument",
        "location": {
          "tag": "Directive",
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "id"
          },
          "directive": "default"
        },
        "argument": "",
        "value": "cuid()"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "id"
          },
          "directive": "id"
        }
      },
      {
        "tag": "CreateField",
        "model": "Key",
        "field": "value",
        "type": "String",
        "arity": "Required"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "value"
          },
          "directive": "default"
        }
      },
      {
        "tag": "CreateArgument",
        "location": {
          "tag": "Directive",
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "value"
          },
          "directive": "default"
        },
        "argument": "",
        "value": "uuid()"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "value"
          },
          "directive": "unique"
        }
      },
      {
        "tag": "CreateField",
        "model": "Key",
        "field": "createdAt",
        "type": "DateTime",
        "arity": "Required"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "createdAt"
          },
          "directive": "default"
        }
      },
      {
        "tag": "CreateArgument",
        "location": {
          "tag": "Directive",
          "path": {
            "tag": "Field",
            "model": "Key",
            "field": "createdAt"
          },
          "directive": "default"
        },
        "argument": "",
        "value": "now()"
      },
      {
        "tag": "CreateField",
        "model": "Key",
        "field": "environment",
        "type": "Environment",
        "arity": "Optional"
      },
      {
        "tag": "CreateField",
        "model": "Organization",
        "field": "clientId",
        "type": "String",
        "arity": "Required"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Organization",
            "field": "clientId"
          },
          "directive": "default"
        }
      },
      {
        "tag": "CreateArgument",
        "location": {
          "tag": "Directive",
          "path": {
            "tag": "Field",
            "model": "Organization",
            "field": "clientId"
          },
          "directive": "default"
        },
        "argument": "",
        "value": "uuid()"
      },
      {
        "tag": "CreateDirective",
        "location": {
          "path": {
            "tag": "Field",
            "model": "Organization",
            "field": "clientId"
          },
          "directive": "unique"
        }
      },
      {
        "tag": "CreateField",
        "model": "Organization",
        "field": "keys",
        "type": "Key",
        "arity": "List"
      }
    ],
    "sourceConfig": "generator photon {\n    provider = \"photonjs\"\n}\n\ndatasource db {\n    provider = \"postgresql\"\n    url      = \"postgresql://postgres:mypassword@localhost/lightswitch?sslmode=prefer\"\n}\n\nmodel Organization {\n    id       String  @default(cuid()) @id\n    clientId String  @default(uuid()) @unique\n    name     String?\n\n    keys Key[]\n}\n\nmodel Environment {\n    id           String       @default(cuid()) @id\n    organization Organization\n    name         String\n}\n\nmodel Key {\n    id          String       @default(cuid()) @id\n    value       String       @default(uuid()) @unique\n    createdAt   DateTime     @default(now())\n    environment Environment?\n}\n\nmodel Variant {\n    id    String @default(cuid()) @id\n    value String\n}\n\nmodel Switch {\n    id             String        @default(cuid()) @id\n    name           String\n    key            String\n    type           SwitchType\n    environments   Environment[]\n    enabled        Boolean       @default(false)\n    defaultVariant Variant?      @relation(name: \"defaultVariant\")\n    variants       Variant[]     @relation(name: \"variants\")\n    organization   Organization\n    createdAt      DateTime      @default(now())\n    updatedAt      DateTime      @updatedAt\n\n}\n\nenum SwitchType {\n    Boolean\n    Multi\n}"
  }
}
```

## Stack Trace
```bash
Jan 19 23:18:12.569  INFO migration_engine: Starting migration engine RPC server git_hash="e7579bd35e0938dbf773f1706c098a0d14a5a038"
Jan 19 23:18:12.578  INFO quaint::single: Starting a postgresql pool with 1 connections.    
Jan 19 23:18:12.588  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 10 migrations (0 pending).
Jan 19 23:18:12.660  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 10 migrations (0 pending).
```
