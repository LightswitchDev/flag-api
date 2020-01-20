# Migration `watch-20200119160313`

This migration has been generated by daaasbu at 1/19/2020, 4:03:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Organization" DROP COLUMN "name",
ADD COLUMN "name" text    ;

ALTER TABLE "public"."Switch" DROP COLUMN "createdAt",
ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
DROP COLUMN "updatedAt",
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration watch-20200113222434..watch-20200119160313
--- datamodel.dml
+++ datamodel.dml
@@ -3,14 +3,14 @@
 }
 datasource db {
     provider = "postgresql"
-    url = "***"
+    url      = "postgresql://postgres:mypassword@localhost/lightswitch?sslmode=prefer"
 }
 model Organization {
-    id   String @default(cuid()) @id
-    name String
+    id   String  @default(cuid()) @id
+    name String?
 }
 model Environment {
     id           String       @default(cuid()) @id
```

