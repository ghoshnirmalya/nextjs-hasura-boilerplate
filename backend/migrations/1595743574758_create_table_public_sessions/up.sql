CREATE TABLE "public"."sessions"("id" uuid NOT NULL UNIQUE DEFAULT gen_random_uuid(), "user_id" integer NOT NULL, "expires" timestamptz NOT NULL, "session_token" varchar NOT NULL, "access_token" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_sessions_updated_at"
BEFORE UPDATE ON "public"."sessions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_sessions_updated_at" ON "public"."sessions"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
