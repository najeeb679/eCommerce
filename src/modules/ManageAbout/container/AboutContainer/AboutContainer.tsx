import { AppLayout } from '@muc/layout'
import OurStory from '../../components/OurStory/OurStory'
import AboutSlider from '../../components/AboutSlider/AboutSlider'
import OurService from '../../components/OurService/OurService'
import AnalyticsCard from '../../components/AnalyticsCard/AnalyticsCard'


const AboutContainer = () => {
  return (
    <AppLayout>
    <OurStory/>
    <AnalyticsCard/>
    <AboutSlider/>
    <OurService/>
    </AppLayout>
  )
}

export default AboutContainer
