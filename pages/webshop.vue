<template>
  <div>
    <div id="my-store-71815548"></div>
    <!-- <div>
        <script
          type="text/javascript"
          src="https://app.shopsettings.com/script.js?71815548&data_platform=code&data_date=2017-10-02"
          charset="utf-8"
        ></script>
        <script type="text/javascript">
          xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            "id=my-store-71815548"
          );
        </script>
      </div>-->
  </div>
</template>

<script>
function injectWebshopScript(storeId, categoryId) {
  window.ec = window.ec || {};
  window.ec.config = window.ec.config || {};
  window.ec.config.baseUrl = "/webshop";
  window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {};
  window.ec.config.storefrontUrls.cleanUrls = true;

  const webshopScript = document.createElement("script");
  webshopScript.setAttribute("type", "text/javascript");
  webshopScript.setAttribute("charset", "utf-8");
  webshopScript.setAttribute("data-cfasync", "false");
  webshopScript.setAttribute(
    "src",
    `https://app.shopsettings.com/script.js?${storeId}&data_platform=code&data_date=2017-10-02`
  );
  webshopScript.onload = () => {
    injectWebshopProductBrowser(storeId);
  };

  document.head.appendChild(webshopScript);
}

function injectWebshopProductBrowser(storeId) {
  window.xProductBrowser(
    "categoriesPerRow=3",
    "views=grid(20,3) list(60) table(60)",
    "categoryView=grid",
    "searchView=list",
    `id=my-store-${storeId}`
  );
}

export default {
  props: {
    storeId: {
      type: Number,
      default: 71815548,
    },
  },
  beforeRouteUpdate(to, from, next) {
    window.Ecwid.refreshConfig();
    next();
  },
  mounted() {
    console.log(window);
    if (window.Ecwid === undefined) {
      injectWebshopScript(this.storeId);
    }
  },
};
</script>
