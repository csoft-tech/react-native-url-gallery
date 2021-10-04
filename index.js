import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/Home'
import FullScreenOverlay from './src/components/FullScreenOverlay'
import MiniPlayer from './src/components/MiniPlayer'

const MediaViewer = ({ 
	data = [],
	primaryBgColor,
	darkTextColor,
	statusBarColor,
}) => {
    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [isFullScreenModalVisible, setIsFullScreenModalVisible] = useState(false);
    const [fullScreenStartIndex, setFullScreenStartIndex] = useState(0);	
    const Ref = useRef(null);

	const [MiniPlayerVideo, setMiniPlayerVideo] = useState({});
	const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);
    
    useEffect(() => {
        if (isFullScreenModalVisible) {
            Ref.current.scrollToIndex({
                animated: false,
                index: fullScreenStartIndex
            })
        }
    }, [fullScreenStartIndex])

    const openFullScreen = index => {
		setIsMiniPlayerVisible(() => false);
		setMiniPlayerVideo(() => {});
        setIsFullScreenModalVisible(() => true);
        setFullScreenStartIndex(() => index);
    };

    const closeModal = () => {
        setIsFullScreenModalVisible(() => false);
        setFullScreenStartIndex(() => 0)
    }

	const handleMiniPlayerOpen = (currentVideo) => {
		setIsMiniPlayerVisible(() => true);
		setMiniPlayerVideo(() => currentVideo);
		closeModal();
	};


    return (
			<SafeAreaView>

				<StatusBar 
					backgroundColor={primaryBgColor}
					barStyle={statusBarColor}
					hidden={isFullScreenModalVisible}
				/>

				<Home 
					primaryBgColor={primaryBgColor}
					darkTextColor={darkTextColor}
					openFullScreen={openFullScreen} 
					data={data}
				/>

				<FullScreenOverlay
					Ref={Ref}
					data={data}
					closeModal={closeModal}
					isFullScreenModalVisible={isFullScreenModalVisible}
					primaryBgColor={primaryBgColor}
					handleMiniPlayerOpen={handleMiniPlayerOpen}
				/>

				{ isMiniPlayerVisible && (
					<MiniPlayer 
						{...MiniPlayerVideo} 
						setIsMiniPlayerVisible={setIsFullScreenModalVisible} 
						setMiniPlayerVideo={setMiniPlayerVideo} 
						openFullScreen={openFullScreen} 
					/>
				) }
				
			</SafeAreaView>
		);
}

export default MediaViewer;