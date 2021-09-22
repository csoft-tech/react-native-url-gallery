import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Header from './src/components/Header'
import Home from './src/screens/Home'
import SearchOverlay from './src/components/SearchOverlay'
import FullScreenOverlay from './src/components/FullScreenOverlay'
import MiniPlayer from './src/components/MiniPlayer'

const MediaViewer = ({ 
	data = [],
	searchPlaceholder = "Search here!",
	primaryBgColor,
	darkTextColor,
	statusBarColor,
	searchMethod,
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

				<Header
					primaryBgColor={primaryBgColor}
					darkTextColor={darkTextColor}
					setIsSearchModalVisible={setIsSearchModalVisible}
				/>

				<Home 
					primaryBgColor={primaryBgColor}
					darkTextColor={darkTextColor}
					openFullScreen={openFullScreen} 
					data={data}
				/>

				<SearchOverlay
					searchResults={searchResults}
					setSearchResults={setSearchResults}
					isSearchModalVisible={isSearchModalVisible}
					setIsSearchModalVisible={setIsSearchModalVisible}
					data={data}
					openFullScreen={openFullScreen}
					searchPlaceholder = {searchPlaceholder}
					searchMethod={searchMethod}
					isMiniPlayerVisible={isMiniPlayerVisible}
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