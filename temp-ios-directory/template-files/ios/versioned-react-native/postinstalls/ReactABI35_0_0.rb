
      # Generated postinstall: ReactABI35_0_0
      if pod_name == 'ReactABI35_0_0' || pod_name == 'ABI35_0_0ExpoKit'
      target_installation_result.native_target.build_configurations.each do |config|
          config.build_settings['OTHER_CFLAGS'] = %w[
            -DkNeverRequested=ReactABI35_0_0kNeverRequested
            -DkNeverProgressed=ReactABI35_0_0kNeverProgressed
            -DkSMCalloutViewRepositionDelayForUIScrollView=ReactABI35_0_0kSMCalloutViewRepositionDelayForUIScrollView
            -DregionAsJSON=ReactABI35_0_0regionAsJSON
            -DunionRect=ReactABI35_0_0unionRect
            -DJSNoBytecodeFileFormatVersion=ReactABI35_0_0JSNoBytecodeFileFormatVersion
            -DJSSamplingProfilerEnabled=ReactABI35_0_0JSSamplingProfilerEnabled
            -DRECONNECT_DELAY_MS=ReactABI35_0_0RECONNECT_DELAY_MS
            -DMAX_DELTA_TIME=ReactABI35_0_0MAX_DELTA_TIME
            -DgCurrentGenerationCount=ReactABI35_0_0gCurrentGenerationCount
            -DgPrintSkips=ReactABI35_0_0gPrintSkips
            -DgPrintChanges=ReactABI35_0_0gPrintChanges
            -DlayoutNodeInternal=ReactABI35_0_0layoutNodeInternal
            -DgDepth=ReactABI35_0_0gDepth
            -DgPrintTree=ReactABI35_0_0gPrintTree
            -DisUndefined=ReactABI35_0_0isUndefined
            -DgNodeInstanceCount=ReactABI35_0_0gNodeInstanceCount
          ]
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI35_0_0RCT_DEV=1'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI35_0_0RCT_ENABLE_INSPECTOR=0'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI35_0_0ENABLE_PACKAGER_CONNECTION=0'
          # Enable Google Maps support
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI35_0_0HAVE_GOOGLE_MAPS=1'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI35_0_0HAVE_GOOGLE_MAPS_UTILS=1'
        end
      end
      # End generated postinstall
