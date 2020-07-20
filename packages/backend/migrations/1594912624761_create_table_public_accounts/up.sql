
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."accounts"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "compound_id" varchar NOT NULL, "user_id" uuid NOT NULL, "provider_type" varchar NOT NULL, "provider_id" varchar NOT NULL, "provider_account_id" varchar NOT NULL, "refresh_token" text, "access_token" text, "access_token_expires" timestamptz, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_accounts_updated_at"
BEFORE UPDATE ON "public"."accounts"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_accounts_updated_at" ON "public"."accounts" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';