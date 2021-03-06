<template>
    <footer class="footer">
        <section class="section is-medium">
            <div class="container">

                <div class="columns">

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['contact']['title'] }}
                        </h6>

                        <a class="flex flex-row m-b-sm" :href="directGoogleMaps">
                            <p class="content">
                                {{ content[lang]['footer']['contact']['address_street'] }}
                                <br/>
                                {{ content[lang]['footer']['contact']['address_code'] }}
                            </p>
                        </a>

                        <a class="flex flex-row m-b-sm" :href="mailtoCitylab">
                            <p class="content">
                                {{ content[lang]['footer']['contact']['mail'] }}
                            </p>
                        </a>

                        <a class="flex flex-row m-b-sm" style="cursor: auto;">
                            <p class="content">
                                {{ content[lang]['footer']['contact']['phone'] }}
                            </p>
                        </a>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['open']['columntitle'] }}
                        </h6>

                        <a class="flex flex-row m-b-sm" style="cursor: auto;">
                            <div class="flex flex-column">
                                <p>
                                    {{ content[lang]['footer']['open']['title'] }}
                                </p>
                                <p class="content">{{ content[lang]['footer']['open']['hours'] }}</p>
                            </div>
                        </a>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4">
                            {{ content[lang]['footer']['more']['title'] }}
                        </h6>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directImprint">
                            <p class="content">
                                {{ content[lang]['footer']['more']['imprint'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directDataprivacy">
                            <p class="content">
                                {{ content[lang]['footer']['more']['dataprivacy'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directCodeofconduct">
                            <p class="content">
                                {{ content[lang]['footer']['more']['codeofconduct'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directNewsletter">
                            <p class="content">
                                {{ content[lang]['footer']['more']['newsletter'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directResources">
                            <p class="content">
                                {{ content[lang]['footer']['more']['resources'] }}
                            </p>
                        </nuxt-link>

                        <nuxt-link class="flex flex-row m-b-sm" :to="directBoard">
                            <p class="content">
                                {{ content[lang]['footer']['more']['board'] }}
                            </p>
                        </nuxt-link>

                    </div>

                    <div class="column is-3">
                        <h6 class="title is-4" style="opacity: 0;">
                            {{ content[lang]['footer']['funding']['title'] }}
                        </h6>

                        <span> {{ content[lang]['footer']['funding']['text_tsb'] }}</span>

                        <a
                        class="flex flex-row m-b-sm logo"
                        :href="`${content[lang]['footer']['funding']['href_tsb']}`"
                        >
                            <img :src="`${content[lang]['footer']['funding']['svg_tsb']}`" alt="">
                        </a>

                        <span v-if="content[lang]['footer']['funding']['text_sen'].length > 0"> {{ content[lang]['footer']['funding']['text_sen'] }}</span>

                        <a
                        class="flex flex-row m-b-sm logo"
                        :href="`${content[lang]['footer']['funding']['href_sen']}`"
                        >
                            <img :src="`${content[lang]['footer']['funding']['svg_sen']}`" alt="">
                        </a>
                    </div>

                </div>
                <p class="text-light">
                    {{ content[lang]['footer']['funding']['text'] }}
                </p>
            </div>
        </section>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: ['content', 'lang'],
        data() {
            return {
                directs: {
                    de: {
                        downloads: '/downloads',
                        press: '/press',
                        dataprivacy: '/dataprivacy',
                        code: '/codeofconduct',
                        imprint: '/legalnote',
                        resources: '/resources',
                        board: '/board',
                        newsletter: '/newsletter_archive',
                    },
                    en: {
                        downloads: '/downloads_en',
                        press: '/press_en',
                        imprint: '/legalnote_en',
                        dataprivacy: '/dataprivacy_en',
                        code: '/codeofconduct_en',
                        resources: '/resources_en',
                        board: '/board_en',
                        newsletter: '/newsletter_archive_en',
                    }
                }
            }
        },
        computed: {
            directBoard() {
                return this.directs[this.lang].board
            },
            directNewsletter() {
                return this.directs[this.lang].newsletter
            },
            directResources() {
                return this.directs[this.lang].resources
            },
            directCodeofconduct() {
                return this.directs[this.lang].code
            },
            directImprint() {
                return this.directs[this.lang].imprint
            },
            directDataprivacy() {
                return this.directs[this.lang].dataprivacy
            },
            directDownloads() {
                return this.directs[this.lang].downloads
            },
            directPress() {
                return this.directs[this.lang].press
            },
            directDownloads() {
                return this.directs[this.lang].downloads
            },
            directGoogleMaps() {
                return 'https://www.google.de/maps/@52.4843705,13.3836835,16.65z'
            },
            mailtoCitylab() {
                return 'mailto:info@citylab-berlin.org'
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/style.scss";

    footer {
        transition: sweep .5s ease-in-out;
        border-top: 2px solid $color-primary--light;
        background: white !important;

        section {
            background: white;
        }
    }

    .flex {
        display: flex;
        &-row {
            flex-direction: row;
        }
        &-column {
            flex-direction: column;
        }
    }

    .footer {
        padding: 0;
    }

    h6.title {
        color: $color-primary;
    }

    .m-b-m {
        margin-bottom: 30px;
    }

    .column {
        span {
            color: $color-primary;
            opacity: 1;
        }

        a {
            color: $color-primary;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }

        a.logo {
            opacity: 1;
            margin-top: 10px;

            &:first-of-type {
                margin-bottom: 25px;
            }
        }
    }

    .icon-wrapper {
        width: 28px;
        height: 24px;
    }

    .text-light {
        color: $grey-light;
    }
</style>


