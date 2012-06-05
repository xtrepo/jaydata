﻿
/// https://developers.facebook.com/docs/reference/api/application/

$data.storageProviders.facebook.EntitySets.FacebookSimpleEntityContext.Application = $data.EntitySet.define({
    name: 'Application',
    fields: {
        items: [
            { name: "id", dataType: "string", key: true, computed: true, required: true, length: 64, schemaCreate: null },            
            { name: "name", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "description", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "canvas_name", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "category", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "company", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "icon_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "subcategory", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "link", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "logo_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "daily_active_users", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "weekly_active_users", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "monthly_active_users", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "migrations", dataType: "array", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "namespace", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "restrictions", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "app_domains", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_dialog_data_help_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_dialog_description", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_dialog_headline", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_dialog_perms_explanation", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_user_perms", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_friend_perms", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_default_activity_privacy", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_enabled", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_extended_perms", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "auth_referral_response_type", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "canvas_fluid_height", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "canvas_fluid_width", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "canvas_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "contact_email", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "created_time", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "creator_uid", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "deauth_callback_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "iphone_app_store_id", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "hosting_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "mobile_web_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "page_tab_default_name", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "page_tab_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "privacy_policy_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "secure_canvas_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "secure_page_tab_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "server_ip_whitelist", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "social_discovery", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "terms_of_service_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "user_support_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null },
            { name: "website_url", dataType: "string", key: false, computed: false, required: true, length: 20, schemaCreate: null }
        ],
        schemaCreate: null
    }
});