
      # Generated postinstall: ReactABI33_0_0
      if pod_name == 'ReactABI33_0_0' || pod_name == 'ABI33_0_0ExpoKit'
      target_installation_result.native_target.build_configurations.each do |config|
          config.build_settings['OTHER_CFLAGS'] = %w[
            -DkNeverRequested=ReactABI33_0_0kNeverRequested
            -DkNeverProgressed=ReactABI33_0_0kNeverProgressed
            -DkSMCalloutViewRepositionDelayForUIScrollView=ReactABI33_0_0kSMCalloutViewRepositionDelayForUIScrollView
            -DregionAsJSON=ReactABI33_0_0regionAsJSON
            -DunionRect=ReactABI33_0_0unionRect
            -DJSNoBytecodeFileFormatVersion=ReactABI33_0_0JSNoBytecodeFileFormatVersion
            -DJSSamplingProfilerEnabled=ReactABI33_0_0JSSamplingProfilerEnabled
            -DRECONNECT_DELAY_MS=ReactABI33_0_0RECONNECT_DELAY_MS
            -DMAX_DELTA_TIME=ReactABI33_0_0MAX_DELTA_TIME
            -DgCurrentGenerationCount=ReactABI33_0_0gCurrentGenerationCount
            -DgPrintSkips=ReactABI33_0_0gPrintSkips
            -DgPrintChanges=ReactABI33_0_0gPrintChanges
            -DlayoutNodeInternal=ReactABI33_0_0layoutNodeInternal
            -DgDepth=ReactABI33_0_0gDepth
            -DgPrintTree=ReactABI33_0_0gPrintTree
            -DisUndefined=ReactABI33_0_0isUndefined
            -DgNodeInstanceCount=ReactABI33_0_0gNodeInstanceCount
          ]
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI33_0_0RCT_DEV=1'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI33_0_0RCT_ENABLE_INSPECTOR=0'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI33_0_0ENABLE_PACKAGER_CONNECTION=0'
          # Enable Google Maps support
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI33_0_0HAVE_GOOGLE_MAPS=1'
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ABI33_0_0HAVE_GOOGLE_MAPS_UTILS=1'
        end
      end
      # End generated postinstall
