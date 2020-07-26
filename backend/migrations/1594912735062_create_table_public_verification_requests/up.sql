
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."verification_requests"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "identifier" varchar NOT NULL, "token" varchar NOT NULL, "expires" timestamptz NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
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
CREATE TRIGGER "set_public_verification_requests_updated_at"
BEFORE UPDATE ON "public"."verification_requests"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_verification_requests_updated_at" ON "public"."verification_requests" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';