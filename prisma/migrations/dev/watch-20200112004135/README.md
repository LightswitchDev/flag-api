# Migration `watch-20200112004135`

This migration has been generated at 1/12/2020, 12:41:35 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "flags"."User" (
  "email" text  NOT NULL DEFAULT '' ,
  "id" text  NOT NULL  ,
  "name" text    ,
  PRIMARY KEY ("id")
);

CREATE TABLE "flags"."Post" (
  "content" text    ,
  "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  "id" text  NOT NULL  ,
  "published" boolean  NOT NULL DEFAULT false ,
  "title" text  NOT NULL DEFAULT '' ,
  "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  PRIMARY KEY ("id")
);

ALTER TABLE "flags"."Post" ADD COLUMN "author" text    REFERENCES "flags"."User"("id") ON DELETE SET NULL;

CREATE UNIQUE INDEX "User.email" ON "flags"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..watch-20200112004135
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+generator photon {
+  provider = "photonjs"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:mypassword@localhost/flags?schema=flags&sslmode=prefer"
+}
+
+model User {
+  id    String  @default(cuid()) @id
+  email String  @unique
+  name  String?
+  posts Post[]
+}
+
+model Post {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  published Boolean  @default(false)
+  title     String
+  content   String?
+  author    User?
+}
```


