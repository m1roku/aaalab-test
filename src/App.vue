<template>
  <div id="app">
    <div class="wrapper">
      <TheHeader />
      <TheMain>
        <div class="container">
          <SiteHeading :level="1" :class="['heading', 'main__heading']">
            <span class="lora">К</span>артины эп<span class="lora">о</span
            ><span class="lora">х</span>и<br />
            В<span class="lora">о</span>зр<span class="lora">о</span>ждения
          </SiteHeading>
          <div class="main__controls">
            <SiteFilters />
            <SiteSearch />
          </div>
          <PicturesList
            :pictures="filteredPictures"
            :listClasses="['main__pictures']"
          />
        </div>
      </TheMain>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";
import TheFooter from "@/components/TheFooter";
import SiteHeading from "@/components/SiteHeading";
import SiteFilters from "@/components/SiteFilters";
import SiteSearch from "@/components/SiteSearch";
import PicturesList from "@/components/PicturesList";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    SiteHeading,
    SiteSearch,
    SiteFilters,
    PicturesList,
  },
  computed: mapGetters(["pictures", "filteredPictures"]),
  methods: {
    ...mapActions(["getPictures"]),
  },
  async mounted() {
    this.getPictures();
  },
};
</script>

<style></style>
